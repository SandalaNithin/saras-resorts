export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-100">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-forest-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-forest-800" />
        </div>
        <p className="font-serif text-lg text-forest-700">Saras Resorts</p>
      </div>
    </div>
  );
}
