import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/trick-shot',
  title: 'Trick Shot'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
