"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { logout } from "@/service/auth.service";
import useSidebarStore from "@/store/sidebarStore";
import userStore from "@/store/userStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, LogOut, User, UserPlus, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LeftSideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  const router = useRouter();
  const { user, clearUser } = userStore();
  const [modalContent, setModalContent] = useState(null);

  const userPlaceholder = user?.username?.split(" ").map((name) => name[0]).join("");

  const handleNavigation = (path) => {
    router.push(path);
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result?.status == "success") {
        router.push("/user-login");
        clearUser();
      }
      toast.success("User logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to log out");
    }
  };

  const openModal = (content) => {
    setModalContent(content);
  };

  return (
    <>
      <aside
        className={`bg-background-header dark:bg-[rgb(2,1,12)] text-foreground fixed top-16 left-0 h-full w-72 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ${
          isSidebarOpen ? "translate-x-0 bg-background-header dark:bg-[rgb(36,37,38)] shadow-lg" : "-translate-x-full"
        } ${isSidebarOpen ? "md:hidden" : ""} md:bg md:shadow-none`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Navigation Menu */}
          <nav className="space-y-4 flex-grow">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation(`/user-profile/${user?._id}`)}>
              <Avatar className="h-10 w-10">
                {user?.profilePicture ? (
                  <AvatarImage src={user?.profilePicture} alt={user?.username} />
                ) : (
                  <AvatarFallback className="dark:bg-gray-400">{userPlaceholder}</AvatarFallback>
                )}
              </Avatar>
              <span className="font-semibold">{user?.username}</span>
            </div>
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/")}>
              <Home className="mr-4" /> Home
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/friends-list")}>
              <UserPlus className="mr-4" /> Add Connections
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation(`/user-profile/${user?._id}`)}>
              <User className="mr-4" /> Profile
            </Button>
          </nav>

          {/* Footer Section */}
          <div className="mb-16">
            <Separator className="my-4" />
            <Button variant="ghost" className="cursor-pointer -ml-4" onClick={handleLogout}>
              <LogOut className="text-red-500" strokeWidth={3} /> <span className="ml-2 font-bold text-md text-red-500">Logout</span>
            </Button>
            <div className="text-xs text-muted-foreground space-y-1">
              <button className="cursor-pointer text-blue-500 underline mb-2" onClick={() => openModal("privacy")}>
                Privacy Policy
              </button>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 

              <button className="cursor-pointer text-blue-500 underline" onClick={() => openModal("terms")}>
                Terms & Conditions
              </button>
              <p>Unseen Perspectives © 2025</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Modal for Privacy Policy and Terms & Conditions */}
      <Dialog open={!!modalContent} onOpenChange={() => setModalContent(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{modalContent === "privacy" ? "Privacy Policy" : "Terms & Conditions"}</DialogTitle>
          </DialogHeader>
          <div className="max-h-60 overflow-y-auto text-sm">
            {modalContent === "privacy" ? (
              <>
<div className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed text-justify space-y-4">
  <p className="text-lg font-semibold text-center">🔒 Welcome to Unseen Perspectives!</p>
  <p className="text-center">Your privacy is important to us.</p>
  
  <hr className="border-gray-400 dark:border-gray-600 my-2" />

  <p><strong className="text-blue-600 dark:text-blue-400">1. Information Collection:</strong> <br />  
    We collect your name, email, phone number, and other details when you sign up.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">2. Data Protection:</strong> <br />
    We use encryption and security measures to protect your data, but no method is 100% secure.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">3. Sharing Information:</strong> <br />
    We do not sell your data but may share it with trusted service providers.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">4. Cookies:</strong> <br />
    We use cookies to enhance user experience. You can disable them in your browser settings.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">5. Your Rights:</strong> <br />
    Contact us if you have concerns about your data or want to request changes.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">6. Updates:</strong> <br />
    We may update this Privacy Policy periodically and notify you accordingly.
  </p>
</div>
              </>
            ) : (
              <>
<div className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed text-justify space-y-4">
  <p className="text-lg font-semibold text-center">🔒 Welcome to Unseen Perspectives!</p>
  <p className="text-center">These Terms govern your access and use of our platform.</p>
  
  <hr className="border-gray-400 dark:border-gray-600 my-2" />

  <p><strong className="text-blue-600 dark:text-blue-400">1. Acceptance of Terms:</strong> <br />
    By using our services, you agree to these terms.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">2. Use of Service:</strong> <br />
    Unseen Perspectives provides a platform for blind individuals to showcase their skills.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">3. Privacy & Data Protection:</strong> <br />
    We are committed to protecting your data.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">4. Limitation of Liability:</strong> <br />
    We are not responsible for any damages arising from the use of our platform.
  </p>

  <p><strong className="text-blue-600 dark:text-blue-400">5. Modifications:</strong> <br />
    We may update these terms and notify users.
  </p>
</div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LeftSideBar;
