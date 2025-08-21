import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'general/primer',
  title: 'Duck Hunt Primer'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
