export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-semibold tracking-tight">Hello {{APP_NAME}}</h1>
      <p className="max-w-xl text-center text-slate-600">{{APP_DESCRIPTION}}</p>
    </main>
  );
}
