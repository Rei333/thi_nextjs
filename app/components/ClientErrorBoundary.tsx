import { ErrorBoundary } from "react-error-boundary";

export default function ClientErrorBoundary({children}: {children: React.ReactNode}) {
    return (
        <ErrorBoundary fallbackRender={({error, resetErrorBoundary}) => (
            <section className="flex flex-col gap-8">
                <h2>Une erreur est survenue</h2>
                <div className="bg-[var(--backgroundDark)] text-[var(--foreground)] p-[20px] rounded-[20px]">{error.message}</div>
                <button className="btn primary" onClick={resetErrorBoundary}>Réessayer</button>
            </section>
        )} onError={(e) => {console.error("Erreur client capturée :", e)}}>
            {children}
        </ErrorBoundary>
    )
}