import ContentPage from '@/app/components/content-page';

const pageInfo = {
  contentId: 'general/glossary',
  title: 'Glossary'
};

export default async function Page() {
  return <ContentPage pageInfo={pageInfo} />;
}
