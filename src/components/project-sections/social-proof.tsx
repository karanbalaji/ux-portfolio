export default function SocialProof({ data }: { data: any }) {
  return (
    <section id="social-proof" className="scroll-mt-20">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50">
          Results & Impact
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
        <p className="text-grey-600 dark:text-white">Social proof and results content will be rendered here.</p>
      </div>
    </section>
  );
}
