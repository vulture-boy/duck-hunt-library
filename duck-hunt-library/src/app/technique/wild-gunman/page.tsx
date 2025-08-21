import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'technique/wild-gunman',
  title: 'Wild Gunman'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
