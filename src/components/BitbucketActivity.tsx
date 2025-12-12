import ContributionGraph from './ContributionGraph';
import { getTranslations } from 'next-intl/server';

async function getBitbucketContributions() {
    try {
        const res = await fetch('https://bitbucket-stats.vercel.app/api/bitbucket_stats', {
            cache: 'no-store',
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            console.error('Failed to fetch bitbucket stats:', res.statusText);
            return [];
        }

        return res.json();

    } catch (error) {
        console.error('Error fetching contributions:', error);
        return [];
    }
}

export default async function BitbucketActivity() {
    const contributions = await getBitbucketContributions();
    const t = await getTranslations('BitbucketActivity');

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-4xl overflow-x-auto">
                <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">{t('title')}</h3>
                <ContributionGraph
                    contributions={contributions}
                    viewMode="normal"
                />
            </div>
        </div>
    );
}
