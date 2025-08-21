import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/ssbu-fundamentals',
  title: 'SSBU Fundamentals'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
