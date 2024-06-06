import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <main className="m-20 flex flex-col justify-center items-center h-full sm:m-12">
            <h1>{t('privacy-policy.title')}</h1>
            <div className="my-10 flex flex-col align-middle items-start justify-center sm:w-full">
                <p>{t('privacy-policy.sentence1')}</p>
                <p>{t('privacy-policy.sentence2')}</p>
                <p>{t('privacy-policy.sentence3')}</p>
            </div>
            <Link className="mt-2 underline underline-offset-4" to="/">
                {t('link.home')}
            </Link>
        </main>
    );
}

export default PrivacyPolicy;
