
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Compile the monthly sales data and create a report.",
        date: "2024-12-22",
        category: "Sales"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update CRM Records",
        description: "Ensure all client records are up to date in the CRM system.",
        date: "2024-12-20",
        category: "CRM"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Resolve Customer Issue",
        description: "Follow up with the customer to resolve their complaint.",
        date: "2024-12-19",
        category: "Customer Support"
      }
    ],
    taskCount: {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Marketing Brochure",
        description: "Create a new design for the upcoming marketing campaign.",
        date: "2024-12-23",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Plan Team Meeting",
        description: "Schedule and prepare an agenda for the weekly team meeting.",
        date: "2024-12-21",
        category: "Management"
      }
    ],
    taskCount: {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Website Bug",
        description: "Resolve the issue causing slow page loads on the website.",
        date: "2024-12-18",
        category: "IT"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop New Feature",
        description: "Implement a new user profile feature for the app.",
        date: "2024-12-24",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Test Payment Integration",
        description: "Ensure the new payment gateway integration works correctly.",
        date: "2024-12-20",
        category: "QA"
      }
    ],
    taskCount: {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    id: 4,
    firstName: "Anaya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Organize Workshop",
        description: "Plan and coordinate the upcoming employee workshop.",
        date: "2024-12-25",
        category: "HR"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Analyze Marketing Data",
        description: "Review and interpret the results of the recent campaign.",
        date: "2024-12-19",
        category: "Analytics"
      }
    ],
    taskCount: {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    id: 5,
    firstName: "Advika",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare Budget Proposal",
        description: "Draft a budget proposal for the next quarter.",
        date: "2024-12-17",
        category: "Finance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Inventory Records",
        description: "Verify and update stock levels in the inventory system.",
        date: "2024-12-21",
        category: "Operations"
      }
    ],
    taskCount: {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    id: 1,
    firstName: "Raj",
    email: "admin@example.com",
    password: "123"
  }
];

  
export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}


export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

