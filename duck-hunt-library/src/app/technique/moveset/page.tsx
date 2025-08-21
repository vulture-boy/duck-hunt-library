import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/moveset',
  title: 'Duck Hunt Moveset'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
