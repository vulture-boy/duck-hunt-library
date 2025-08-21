import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/canicide',
  title: 'Canicide'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
