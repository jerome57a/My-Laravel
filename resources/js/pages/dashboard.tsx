import { Head, Link, usePage } from '@inertiajs/react';
import { LogOut, ShieldCheck } from 'lucide-react';
import { dashboard, logout } from '@/routes';

export default function Dashboard() {
    const { auth, name } = usePage().props;
    const user = auth.user;

    return (
        <>
            <Head title="Dashboard" />
            <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 p-5 sm:p-8">
                <header>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">{name || 'My WorkOS App'}</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        Welcome, {user?.name || 'back'}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        You are signed in and ready to continue.
                    </p>
                </header>

                <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 sm:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="" className="size-12 rounded-full object-cover" />
                                ) : (
                                    <ShieldCheck className="size-6" />
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate font-semibold text-slate-900 dark:text-white">{user?.name}</p>
                                <p className="truncate text-sm text-slate-500 dark:text-slate-400">{user?.email}</p>
                            </div>
                        </div>

                        <Link
                            href={logout()}
                            as="button"
                            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
                        >
                            <LogOut className="size-4" />
                            Log out
                        </Link>
                    </div>

                    <div className="mt-7 flex items-start gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <p>Your session is protected by WorkOS AuthKit.</p>
                    </div>
                </section>
            </main>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
