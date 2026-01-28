import ContributionGraph from './ContributionGraph';
import { getTranslations } from 'next-intl/server';
import bitbucketStats from '@/data/bitbucket-stats.json';

async function getBitbucketContributions() {
    return bitbucketStats;
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
