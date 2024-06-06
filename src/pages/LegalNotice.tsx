import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LegalNotice() {
    const { t } = useTranslation();

    return (
        <main className="m-20 flex flex-col justify-center items-center h-full sm:m-12">
            <h1>{t('legal-notice.title')}</h1>
            <div className="my-10 flex flex-col align-middle items-start justify-center sm:w-full">
                <p>{t('legal-notice.sentence1')}</p>
                <p>{t('legal-notice.sentence2')}</p>
                <p className="pb-5">email: matias.larralde97[at]gmail.com</p>
                <p>{t('legal-notice.sentence3')}</p>
                <p>{t('legal-notice.sentence4')}</p>
                <p>{t('legal-notice.sentence5')}</p>
            </div>
            <Link className="mt-2 underline underline-offset-4" to="/">
                {t('link.home')}
            </Link>
        </main>
    );
}

export default LegalNotice;
