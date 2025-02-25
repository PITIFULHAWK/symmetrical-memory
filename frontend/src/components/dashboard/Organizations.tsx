//frontend/src/components/dashboard/Organizations.tsx
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import Modal from "../ui/Modal";
import CreateOrgForm from "../forms/CreateOrgForm";

export default function Organizations() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateOrg = (orgData: { name: string; description: string }) => {
    console.log("Creating organization:", orgData);
    // Implement API call to create organization
    setIsCreateModalOpen(false);
  };
  const organizations = [
    { id: "1", name: "Org 1", description: "Description for Org 1" },
    { id: "2", name: "Org 2", description: "Description for Org 2" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">Organizations</h2>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create Organization
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org, index) => (
          <motion.div
            key={org.id}
            className="bg-[#303030] bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">{org.name}</h3>
            <p className="text-gray-300">{org.description}</p>
          </motion.div>
        ))}
      </div>
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create a New Organization"
      >
        <CreateOrgForm
          onSubmit={handleCreateOrg}
          onCancel={() => setIsCreateModalOpen(false)}
        />
      </Modal>
    </div>
  )
}


