import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';
import { dashboard, login } from '@/routes';

function GoogleMark() {
    return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className="size-5">
            <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4.1 6v5h6.6c3.8-3.5 6.1-8.6 6.1-14.7Z" />
            <path fill="#34A853" d="M10.6 28.6a14.4 14.4 0 0 1 0-9.2l-8-6.2a24 24 0 0 0 0 21.6l8-6.2Z" />
            <path fill="#FBBC05" d="M24 48c6.5 0 11.9-2.1 15.9-5.9l-7.8-6c-2.1 1.4-4.8 2.3-8.1 2.3-6.3 0-11.6-4.2-13.5-9.9l-8 6.2C6.5 42.6 14.6 48 24 48Z" />
            <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.9 2.4 30.5 0 24 0 14.6 0 6.5 5.4 2.6 13.2l8 6.2C12.4 13.7 17.7 9.5 24 9.5Z" />
        </svg>
    );
}

export default function Welcome() {
    const { auth, name } = usePage().props;
    const user = auth.user;

    return (
        <>
            <Head title={user ? 'Welcome' : 'Sign in'} />
            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f6f7fb] px-5 py-12 text-slate-950 dark:bg-[#090d18] dark:text-white sm:px-8">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-32 -top-36 size-[28rem] rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-950/60" />
                    <div className="absolute -bottom-48 -right-24 size-[32rem] rounded-full bg-sky-100/70 blur-3xl dark:bg-blue-950/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(#64748b12_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <section className="relative w-full max-w-md">
                    <div className="mb-8 flex items-center justify-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15 dark:bg-white dark:text-slate-950">
                            <ShieldCheck className="size-5" strokeWidth={2.2} />
                        </span>
                        <span className="text-base font-semibold tracking-tight">{name || 'My WorkOS App'}</span>
                    </div>

                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/85 sm:p-10">
                        {user ? (
                            <>
                                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                                    <ShieldCheck className="size-6" />
                                </div>
                                <p className="mb-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">You are signed in</p>
                                <h1 className="text-3xl font-semibold tracking-tight">Welcome, {user.name}</h1>
                                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Continue to your dashboard.</p>
                                <Link
                                    href={dashboard()}
                                    className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                >
                                    Go to dashboard <ArrowRight className="size-4" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-300">Your workspace starts here</p>
                                <h1 className="text-3xl font-semibold tracking-tight sm:text-[2.1rem]">Welcome back</h1>
                                <p className="mt-3 text-[15px] leading-6 text-slate-500 dark:text-slate-400">
                                    Sign in securely to continue to your dashboard.
                                </p>

                                <Link
                                    href={login()}
                                    className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                                >
                                    <GoogleMark />
                                    Continue with Google
                                </Link>

                                <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                                    <LockKeyhole className="size-3.5" />
                                    <span>Secure sign-in powered by WorkOS</span>
                                </div>
                            </>
                        )}
                    </div>

                    <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
                        By continuing, you will be redirected to WorkOS AuthKit.
                    </p>
                </section>
            </main>
        </>
    );
}
