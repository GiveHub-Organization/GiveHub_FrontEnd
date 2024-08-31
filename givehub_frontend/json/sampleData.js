const sampleData = {
  ngos: [
    {
      id: "ngo1",
      name: "Helping Hands",
      email: "contact@helpinghands.org", // Added email
      contactPerson: {
        name: "John Doe",
        email: "john.doe@helpinghands.org",
        phone: "+1234567890"
      },
      drives: [
        {
          id: "drive1",
          title: "Food Drive for Homeless",
          description: "A drive to collect and distribute food to the homeless in the city.",
          date: "2024-09-10",
          location: "City Park",
          contact: {
            name: "John Doe",
            email: "john.doe@helpinghands.org",
            phone: "+1234567890"
          }
        },
        {
          id: "drive2",
          title: "Clothing Drive",
          description: "Collecting winter clothes for those in need.",
          date: "2024-10-01",
          location: "Community Center",
          contact: {
            name: "Jane Smith",
            email: "jane.smith@helpinghands.org",
            phone: "+0987654321"
          }
        }
      ]
    },
    {
      id: "ngo2",
      name: "Green Earth",
      email: "contact@greenearth.org", // Added email
      contactPerson: {
        name: "Alice Johnson",
        email: "alice.johnson@greenearth.org",
        phone: "+1122334455"
      },
      drives: [
        {
          id: "drive3",
          title: "Tree Planting Campaign",
          description: "Join us in planting trees in the city park.",
          date: "2024-09-15",
          location: "City Park",
          contact: {
            name: "Alice Johnson",
            email: "alice.johnson@greenearth.org",
            phone: "+1122334455"
          }
        }
      ]
    }
  ],
  organizations: [
    {
      id: "org1",
      name: "Tech For Good",
      email: "info@techforgood.org",
      phone: "+1223344556"
    },
    {
      id: "org2",
      name: "Healthy Living Co.",
      email: "contact@healthyliving.co",
      phone: "+1334455667"
    }
  ]
};

export default sampleData;
