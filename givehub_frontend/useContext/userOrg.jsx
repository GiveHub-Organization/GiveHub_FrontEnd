import OrganizationDashboard from '@/app/dashboard/org-dashboard';

const App = () => {
  const loggedInUser = {
    id: "org1", // Example logged-in user
    name: "Tech For Good",
    email: "info@techforgood.org",
    phone: "+1223344556"
  };

  return (
    <div>
      <OrganizationDashboard user={loggedInUser} />
    </div>
  );
};

export default App;
