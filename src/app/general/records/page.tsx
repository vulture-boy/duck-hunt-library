import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'general/records',
  title: 'Records'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
