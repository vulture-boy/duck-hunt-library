import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/movement',
  title: 'Movement'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
