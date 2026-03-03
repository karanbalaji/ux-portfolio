"use client";

import { useQuery, useMutation } from "convex/react";
import { Check, X, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";
import { api } from "@/../convex/_generated/api";
import { Id } from "@/../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const statusColors = {
  pending: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  approved: "bg-green-500/10 text-green-600 dark:text-green-400",
  rejected: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function AdminReferralSubmissionsPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<Id<"referral_submissions"> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [approveData, setApproveData] = useState({
    slug: "",
    order: 0,
  });
  const [rejectNotes, setRejectNotes] = useState("");

  const submissions = useQuery(api.referral_submissions.getSubmissions, {
    status: statusFilter,
  });
  const approveSubmission = useMutation(api.referral_submissions.approveSubmission);
  const rejectSubmission = useMutation(api.referral_submissions.rejectSubmission);
  const deleteSubmission = useMutation(api.referral_submissions.deleteSubmission);

  const openApproveDialog = (id: Id<"referral_submissions">, company: string) => {
    setSelectedSubmission(id);
    setApproveData({
      slug: company.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      order: 0,
    });
    setIsApproveDialogOpen(true);
  };

  const openRejectDialog = (id: Id<"referral_submissions">) => {
    setSelectedSubmission(id);
    setRejectNotes("");
    setIsRejectDialogOpen(true);
  };

  const handleApprove = async () => {
    if (!selectedSubmission || !approveData.slug) return;
    
    setIsSubmitting(true);
    try {
      await approveSubmission({
        id: selectedSubmission,
        slug: approveData.slug,
        order: approveData.order || undefined,
      });
      setIsApproveDialogOpen(false);
      setSelectedSubmission(null);
    } catch (error) {
      console.error("Failed to approve:", error);
      alert("Failed to approve submission. " + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReject = async () => {
    if (!selectedSubmission) return;
    
    setIsSubmitting(true);
    try {
      await rejectSubmission({
        id: selectedSubmission,
        notes: rejectNotes || undefined,
      });
      setIsRejectDialogOpen(false);
      setSelectedSubmission(null);
    } catch (error) {
      console.error("Failed to reject:", error);
      alert("Failed to reject submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: Id<"referral_submissions">) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      try {
        await deleteSubmission({ id });
      } catch (error) {
        console.error("Failed to delete:", error);
        alert("Failed to delete submission.");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sans">Referral Submissions</h1>
          <p className="text-muted-foreground mt-1">
            Review and manage public referral submissions
          </p>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {!submissions ? (
        <div>Loading...</div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No submissions found.
        </div>
      ) : (
        <div className="bg-card rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Submitter</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission._id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{submission.company}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-xs">
                        {submission.description}
                      </div>
                      <a
                        href={submission.referralUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1 mt-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View URL
                      </a>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                      {submission.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {submission.submitterName ? (
                      <div>
                        <div>{submission.submitterName}</div>
                        <div className="text-sm text-muted-foreground">
                          {submission.submitterEmail}
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Anonymous</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {new Date(submission.submittedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={statusColors[submission.status as keyof typeof statusColors] || ""}
                    >
                      {submission.status}
                    </Badge>
                    {submission.notes && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {submission.notes}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {submission.status === "pending" && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openApproveDialog(submission._id, submission.company)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openRejectDialog(submission._id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(submission._id)}
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

      <Dialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve Submission</DialogTitle>
            <DialogDescription>
              Create a new referral from this submission.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={approveData.slug}
                onChange={(e) => setApproveData({ ...approveData, slug: e.target.value })}
                placeholder="company-name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Order (optional)</Label>
              <Input
                id="order"
                type="number"
                value={approveData.order}
                onChange={(e) => setApproveData({ ...approveData, order: parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApproveDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleApprove} disabled={isSubmitting || !approveData.slug}>
              {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Submission</DialogTitle>
            <DialogDescription>
              Provide an optional reason for rejection.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Input
                id="notes"
                value={rejectNotes}
                onChange={(e) => setRejectNotes(e.target.value)}
                placeholder="Reason for rejection..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRejectDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleReject} disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Reject
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
