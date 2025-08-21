import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/clay-shooting',
  title: 'Clay Shooting'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
