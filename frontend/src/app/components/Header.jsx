// Header.js
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Loader from "@/lib/Loader";
import { logout } from "@/service/auth.service";
import { getAllUsers } from "@/service/user.service";
import userStore from "@/store/userStore";
import {
  Info,
  ShieldCheck,
  UserPlus,
  Home as HomeIcon, // Renamed to avoid conflict
  LogOut,
  Moon,
  Search,
  Sun,
  Users,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

// Your <style jsx> can remain if needed elsewhere

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const searchRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { user, clearUser } = userStore();

  // State for the mobile-specific logo dropdown
  const [isMobileLogoMenuOpen, setIsMobileLogoMenuOpen] = useState(false);

  const userPlaceholder = user?.username
    ?.split(" ")
    .map((name) => name[0])
    .join("");

  const handleNavigation = (path, itemName) => {
    router.push(path);
    if (itemName) {
      setActiveTab(itemName);
    }
    setIsMobileLogoMenuOpen(false); // Close dropdown after navigation
  };

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result?.status == "success") {
        router.push("/user-login");
        clearUser();
        toast.success("User logged out successfully");
      } else {
         toast.error(result?.message || "Logout failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to log out");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const result = await getAllUsers();
        setUserList(result || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery && Array.isArray(userList)) {
      const filtered = userList.filter(u =>
        u.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterUsers(filtered);
      setIsSearchOpen(true);
    } else {
      setFilterUsers([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery, userList]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchOpen(false);
  };

  const handleUserClick = async (userId) => {
    try {
      setLoading(true);
      setIsSearchOpen(false);
      setSearchQuery("");
      await router.push(`user-profile/${userId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickOutsideSearch = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideSearch);
    return () => {
      document.removeEventListener("click", handleClickOutsideSearch);
    };
  }, []);

  if (loading && !user) {
    return <Loader />;
  }

  return (
    <header className="bg-background-header dark:bg-[rgb(2,1,10)] text-foreground shadow-lg h-16 fixed top-0 left-0 right-0 z-50 p-2 custom-shadow">
      <div className="mx-auto flex justify-between items-center p-2">
        {/* Left section: Logo and Search */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Logo for Large Screens (md and up) - Direct Navigation */}
          <div className="hidden md:block">
            <Image
              src="/images/SphereBreak_logo1_2.png"
              width={40}
              height={40}
              alt="app_logo_large_screen"
              onClick={() => handleNavigation("/", "home")}
              className="cursor-pointer rounded-full"
              priority
            />
          </div>

          {/* Logo for Small Screens (below md) - Opens Dropdown */}
          <div className="block md:hidden">
            <DropdownMenu open={isMobileLogoMenuOpen} onOpenChange={setIsMobileLogoMenuOpen}>
              <DropdownMenuTrigger asChild>
                {/* Important: The Image itself is the trigger */}
                <Image
                  src="/images/SphereBreak_logo1_2.png"
                  width={40}
                  height={40}
                  alt="app_logo_mobile_menu"
                  className="cursor-pointer rounded-full"
                  priority // Good for LCP
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 z-[51] bg-[rgb(235,245,250)] dark:bg-[rgb(8,4,20)] text-foreground border border-foreground mt-1"
                align="start" // Aligns dropdown to the start of the trigger
              >
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => handleNavigation("/", "home_mobile")}
                >
                  <HomeIcon className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => handleNavigation("/friends-list", "connections_mobile")}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Add Connections</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => handleNavigation("/drop-down/about-us", "about_mobile")}
                >
                  <Info className="mr-2 h-4 w-4" />
                  <span>About Us</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-foreground/20" />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => handleNavigation("/drop-down/tnc", "privacy_mobile")}
                  >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  <span>Terms and Conditions</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => handleNavigation("/drop-down/privacy-policy", "privacy_mobile")}
                  >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  <span>Privacy Policy</span>
                </DropdownMenuItem>
                  </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Bar */}
          <div className="relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-foreground/70 h-4 w-4" />
                <Input
                  className="pl-8 w-40 md:w-64 h-10 bg-[rgb(230,240,245)] dark:bg-[rgb(10,5,25)] rounded-full text-foreground placeholder:text-foreground/60"
                  placeholder="Search People..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                />
              </div>
              {isSearchOpen && filterUsers.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-[rgb(235,245,250)] dark:bg-[rgb(8,4,20)] border border-foreground/30 rounded-md shadow-lg mt-1 z-50 max-h-80 overflow-y-auto">
                  <div className="p-1">
                    {filterUsers.map((u) => (
                      <div
                        className="flex items-center space-x-2 p-2 hover:bg-[rgb(230,240,245)] dark:hover:bg-[rgb(12,6,30)] rounded-md cursor-pointer"
                        key={u._id}
                        onClick={() => handleUserClick(u._id)}
                      >
                        <Avatar className="h-8 w-8">
                          {u?.profilePicture ? (
                            <AvatarImage src={u.profilePicture} alt={u.username} />
                          ) : (
                            <AvatarFallback className="text-xs">
                              {u.username?.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <span className="text-sm">{u.username}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
               {isSearchOpen && filterUsers.length === 0 && searchQuery && (
                 <div className="absolute top-full left-0 w-full bg-[rgb(235,245,250)] dark:bg-[rgb(8,4,20)] border border-foreground/30 rounded-md shadow-lg mt-1 z-50 p-2">
                    <div className="p-2 text-sm text-foreground/80">No users found.</div>
                 </div>
               )}
            </form>
          </div>
        </div>

        {/* Main Navigation - Hidden on small screens (below md) */}
        <nav className="hidden md:flex items-center justify-around w-auto max-w-md gap-4 md:gap-7">
          {[
            { icon: HomeIcon, path: "/", name: "home" },
            { icon: Users, path: "/friends-list", name: "friends" },
          ].map(({ icon: Icon, path, name }) => (
            <Button
              key={name}
              variant="ghost"
              size="icon"
              className={`flex flex-col items-center justify-center h-auto px-2 py-1 text-foreground hover:bg-foreground/10 rounded-md ${
                activeTab === name ? "bg-foreground/10" : ""
              }`}
              onClick={() => handleNavigation(path, name)}
              title={name.charAt(0).toUpperCase() + name.slice(1)}
            >
              <Icon className="w-5 h-5" />
            </Button>
          ))}
        </nav>

        {/* Right section: User Profile Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-foreground hover:bg-foreground/10">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
                <Avatar className="h-9 w-9">
                  {user?.profilePicture ? (
                    <AvatarImage src={user.profilePicture} alt={user.username} />
                  ) : (
                    <AvatarFallback className="text-sm">
                      {userPlaceholder || <Users className="h-4 w-4"/>}
                    </AvatarFallback>
                  )}
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 z-[51] bg-[rgb(235,245,250)] dark:bg-[rgb(8,4,20)] text-foreground border border-foreground mt-1" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1 p-1">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-9 w-9">
                       {user?.profilePicture ? (
                        <AvatarImage src={user.profilePicture} alt={user.username} />
                      ) : (
                        <AvatarFallback className="text-sm">
                          {userPlaceholder || <Users className="h-4 w-4"/>}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{user?.username || "Guest User"}</p>
                      <p className="text-xs mt-1 text-foreground/80 leading-none">{user?.email}</p>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-foreground/20" />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => user?._id && handleNavigation(`/user-profile/${user._id}`, "profile")}
                disabled={!user?._id}
              >
                <Users className="mr-2 h-4 w-4" /> <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-foreground/20" />
              <DropdownMenuItem
                className="cursor-pointer text-red-500 hover:!text-red-500 focus:!text-red-500"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" strokeWidth={2.5}/> <span className="font-medium">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
export default Header;