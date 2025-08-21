import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'general/update-history',
  title: 'Update History'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
