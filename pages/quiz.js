// The dedicated quiz page is superseded by Tool 01 on the homepage.
// This route redirects so any external links keep working.
export default function Quiz() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: { destination: '/#tool-01', permanent: false },
  };
}
