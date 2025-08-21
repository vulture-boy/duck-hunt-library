import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'articles/stage-selection',
  title: 'Stage Selection'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
