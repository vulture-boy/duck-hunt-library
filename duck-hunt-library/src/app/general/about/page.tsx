import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'general/about',
  title: 'About'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
