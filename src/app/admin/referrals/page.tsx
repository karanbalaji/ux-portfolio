"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { Plus, Trash2, Edit, ExternalLink, ToggleLeft, ToggleRight, Loader2 } from "lucide-react";
import { api } from "@/../convex/_generated/api";
import { Id, Doc } from "@/../convex/_generated/dataModel";

type Referral = Doc<"referrals">;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const categories = [
  { value: "banking", label: "Banking" },
  { value: "tech", label: "Tech" },
  { value: "tools", label: "Tools" },
  { value: "internet", label: "Internet" },
  { value: "productivity", label: "Productivity" },
  { value: "shopping", label: "Shopping" },
  { value: "entertainment", label: "Entertainment" },
  { value: "other", label: "Other" },
];

export default function AdminReferralsPage() {
  const referrals = useQuery(api.referrals.getAllReferrals, {});
  const createReferral = useMutation(api.referrals.createReferral);
  const updateReferral = useMutation(api.referrals.updateReferral);
  const deleteReferral = useMutation(api.referrals.deleteReferral);
  const toggleActive = useMutation(api.referrals.toggleActive);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<Id<"referrals"> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    slug: "",
    company: "",
    description: "",
    referralUrl: "",
    category: "other",
    logoUrl: "",
    lucideIcon: "",
    order: 0,
  });

  const resetForm = () => {
    setFormData({
      slug: "",
      company: "",
      description: "",
      referralUrl: "",
      category: "other",
      logoUrl: "",
      lucideIcon: "",
      order: 0,
    });
    setEditingId(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (referral: Referral) => {
    setEditingId(referral._id);
    setFormData({
      slug: referral.slug,
      company: referral.company,
      description: referral.description,
      referralUrl: referral.referralUrl,
      category: referral.category,
      logoUrl: referral.logoUrl || "",
      lucideIcon: referral.lucideIcon || "",
      order: referral.order,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingId) {
        await updateReferral({
          id: editingId,
          slug: formData.slug,
          company: formData.company,
          description: formData.description,
          referralUrl: formData.referralUrl,
          category: formData.category,
          logoUrl: formData.logoUrl || undefined,
          lucideIcon: formData.lucideIcon || undefined,
          order: formData.order,
        });
      } else {
        await createReferral({
          slug: formData.slug,
          company: formData.company,
          description: formData.description,
          referralUrl: formData.referralUrl,
          category: formData.category,
          logoUrl: formData.logoUrl || undefined,
          lucideIcon: formData.lucideIcon || undefined,
          order: formData.order,
        });
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Failed to save referral. " + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: Id<"referrals">) => {
    if (confirm("Are you sure you want to delete this referral?")) {
      try {
        await deleteReferral({ id });
      } catch (error) {
        console.error("Failed to delete:", error);
        alert("Failed to delete referral.");
      }
    }
  };

  const handleToggleActive = async (id: Id<"referrals">, currentStatus: boolean) => {
    try {
      await toggleActive({ id, isActive: !currentStatus });
    } catch (error) {
      console.error("Failed to toggle:", error);
      alert("Failed to update status.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sans">Referrals</h1>
          <p className="text-muted-foreground mt-1">
            Manage your referral links
          </p>
        </div>
        <Button onClick={openCreateDialog} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Referral
        </Button>
      </div>

      {!referrals ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-card rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrals.map((referral) => (
                <TableRow key={referral._id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{referral.company}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-xs">
                        {referral.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                      {referral.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{referral.clicks}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleToggleActive(referral._id, referral.isActive)}
                      className="gap-2"
                    >
                      {referral.isActive ? (
                        <>
                          <ToggleRight className="h-4 w-4 text-green-500" />
                          Active
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="h-4 w-4 text-muted-foreground" />
                          Inactive
                        </>
                      )}
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a
                          href={referral.referralUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(referral)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(referral._id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit Referral" : "Add Referral"}
            </DialogTitle>
            <DialogDescription>
              {editingId
                ? "Update the referral details below."
                : "Fill in the details to add a new referral."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="wise-banking"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Wise"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description"
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralUrl">Referral URL *</Label>
              <Input
                id="referralUrl"
                type="url"
                value={formData.referralUrl}
                onChange={(e) => setFormData({ ...formData, referralUrl: e.target.value })}
                placeholder="https://..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Order</Label>
                <Input
                  id="order"
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="logoUrl">Logo URL</Label>
                <Input
                  id="logoUrl"
                  type="url"
                  value={formData.logoUrl}
                  onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lucideIcon">Lucide Icon</Label>
                <Input
                  id="lucideIcon"
                  value={formData.lucideIcon}
                  onChange={(e) => setFormData({ ...formData, lucideIcon: e.target.value })}
                  placeholder="Landmark"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {editingId ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
