"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LogIn, Moon, Sun } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { loginUser, registerUser } from "@/service/auth.service";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import Modal from "./Modal"; // Import your Modal component
import PrivacyModal from "./PrivacyPolicyModal"; // Import your Privacy Policy modal component

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState("home");
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const registerSchema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    dateOfBirth: yup.date().required("Birth date is required"),
    gender: yup.string().oneOf(["male", "female", "other"], "Please select a gender").required("Gender is required"),
  });

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    reset: resetLoginForm,
    formState: { errors: errorsLogin },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    reset: resetSignUpForm,
    formState: { errors: errorsSignUp },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmitRegister = async (data) => {
    try {
      const result = await registerUser(data);
      if (result.status === "success") {
        router.push("/");
      }
      toast.success("User registered successfully");
    } catch (error) {
      console.error(error);
      toast.error("Email already exists");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    resetLoginForm();
    resetSignUpForm();
  }, [resetLoginForm, resetSignUpForm]);

  const onSubmitLogin = async (data) => {
    try {
      const result = await loginUser(data);
      if (result.status === "success") {
        router.push("/");
      }
      toast.success("User logged in successfully");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  };

  const handleTermsModalOpen = () => {
    setIsTermsModalOpen(true);
  };

  const handleTermsModalClose = () => {
    setIsTermsModalOpen(false);
  };

  const handlePrivacyModalOpen = () => {
    setIsPrivacyModalOpen(true);
  };

  const handlePrivacyModalClose = () => {
    setIsPrivacyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-50 dark:from-slate-700 dark:to-gray-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Circles */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl -top-32 -left-32 dark:from-blue-800 dark:to-purple-800"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-red-200 to-yellow-200 rounded-full opacity-20 blur-3xl -bottom-32 -right-32 dark:from-red-800 dark:to-yellow-800"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-background-header dark:bg-[rgb(2,1,10)] text-foreground shadow-md z-50">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActivePage("home")}
              className="flex items-center text-black dark:text-white font-semibold text-2xl"
            >
              <img src="/images/SphereBreak_logo1_2.png" alt="app_logo" className="mr-4 h-11 w-11" />
              Unseen Perspectives
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer bg-background-header dark:bg-[rgb(2,1,10)] text-foreground transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {theme === "light" ? (
                <>
                  <Moon className="mr-2" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="mr-2" />
                  <span>Light Mode</span>
                </>
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center p-4 text-foreground relative z-10">
        {activePage === "home" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-foreground">Welcome to Unseen Perspectives</h1>
            <p className="text-2xl text-foreground">
              Empowering Blind and Visually Impaired Talent!
            </p>
            <p className="text-xl text-foreground">
              Syed Mohammed Ibrahim Ali and Syed Moaaz Ahmed are the founders behind this initiative. They envisioned Unseen Perspectives as a platform to bridge the gap between talented blind individuals and employers, empowering them to showcase their skills and secure meaningful employment. Their mission is to create an inclusive future where everyone, regardless of their capabilities, has the opportunity to thrive.
            </p>

            {/* Our Motive Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Motive</h2>
                <p className="text-xl text-foreground">
                  Unseen Perspectives is more than an initiative—it's a movement to bridge the gap between the visually impaired and meaningful employment. We believe that every person, regardless of their abilities, deserves the chance to shine in their chosen field. By creating direct channels of communication between employers and blind individuals, we aim to foster inclusivity, equality, and independence.
                </p>
              </div>
              <div className="flex-1">
                <img src="/images/image1.png" alt="Our Motive" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Future Propositions Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <img src="/images/image2.jpg" alt="Future Propositions" className="rounded-lg shadow-lg" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">Future Propositions</h2>
                <p className="text-xl text-foreground">
                  Looking ahead, Unseen Perspectives envisions a comprehensive Skill-Up Program—a groundbreaking initiative designed to elevate the employability of blind individuals. Through specialized training sessions in cutting-edge technology, soft skills, and industry-focused certifications, we aim to transform our candidates into pioneers in their fields. Furthermore, we're building a vibrant community network where collaboration, mentorship, and growth opportunities flourish, ensuring that the impact of our mission grows exponentially.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <p className="text-2xl font-semibold text-foreground">
                Together, let's redefine possibilities and create a world where everyone thrives!
              </p>
              <p className="text-lg text-foreground mt-4">
                Our platform provides a space for blind and visually impaired individuals to create profiles and showcase their unique skills to potential employers. Join us in fostering a more inclusive and diverse workforce!
              </p>
              <Button
                onClick={() => setActivePage("login")}
                className="mt-6 bg-blue-500 text-white hover:bg-blue-600"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}

        {/* Login Page */}
        {activePage === "login" && (
          <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-full max-w-md dark:text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Unseen Perspectives
                  </CardTitle>
                  <CardDescription className="text-center">
                    Working for Communities, Unseen Perspectives!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    {/* Login Tab */}
                    <TabsContent value="login">
                      <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="loginEmail">Email</Label>
                            <Input
                              id="loginEmail"
                              name="email"
                              type="email"
                              {...registerLogin("email")}
                              placeholder="Enter your email"
                              className="col-span-3 dark:border-gray-400"
                            />
                            {errorsLogin.email && (
                              <p className="text-red-500 text-sm">{errorsLogin.email.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="loginPassword">Password</Label>
                            <Input
                              id="loginPassword"
                              name="password"
                              type="password"
                              {...registerLogin("password")}
                              placeholder="Enter your password"
                              className="col-span-3 dark:border-gray-400"
                            />
                            {errorsLogin.password && (
                              <p className="text-red-500 text-sm">{errorsLogin.password.message}</p>
                            )}
                          </div>
                          <Button className="w-full" type="submit">
                            <LogIn className="mr-2 w-4 h-4" /> Log in
                          </Button>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Signup Tab */}
                    <TabsContent value="signup">
                      <form onSubmit={handleSubmitSignUp(onSubmitRegister)}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="signupName">Username</Label>
                            <Input
                              id="signupName"
                              name="username"
                              type="text"
                              {...registerSignUp("username")}
                              placeholder="Enter your username"
                              className="col-span-3 dark:border-gray-400"
                            />
                            {errorsSignUp.username && (
                              <p className="text-red-500 text-sm">{errorsSignUp.username.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="signupEmail">Email</Label>
                            <Input
                              id="signupEmail"
                              name="email"
                              type="email"
                              {...registerSignUp("email")}
                              placeholder="Enter your email"
                              className="col-span-3 dark:border-gray-400"
                            />
                            {errorsSignUp.email && (
                              <p className="text-red-500 text-sm">{errorsSignUp.email.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="signupPassword">Password</Label>
                            <Input
                              id="signupPassword"
                              name="password"
                              type="password"
                              {...registerSignUp("password")}
                              placeholder="Enter your password"
                              className="col-span-3 dark:border-gray-400"
                            />
                            {errorsSignUp.password && (
                              <p className="text-red-500 text-sm">{errorsSignUp.password.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="signupBirthday">Birthdate</Label>
                            <Input
                              id="signupBirthday"
                              name="dateOfBirth"
                              type="date"
                              {...registerSignUp("dateOfBirth")}
                              className="col-span-3 dark:border-gray-400"
                            />
                            {errorsSignUp.dateOfBirth && (
                              <p className="text-red-500 text-sm">{errorsSignUp.dateOfBirth.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Gender</Label>
                            <RadioGroup
                              className="flex justify-between"
                              defaultValue="male"
                              {...registerSignUp("gender")}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </RadioGroup>
                            {errorsSignUp.gender && (
                              <p className="text-red-500 text-sm">{errorsSignUp.gender.message}</p>
                            )}
                          </div>
                          <Button className="w-full" type="submit">
                            <LogIn className="mr-2 w-4 h-4" /> Sign Up
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>

                {/* Social Login Section */}
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-[30%] border-t border-muted-foreground"></span>
                      <div className="w-[40%]"></div>
                      <span className="w-[30%] border-t border-muted-foreground"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="w-full gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                          <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                        Google
                      </Button>
                    </motion.div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-8 relative z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
          {/* Logo and Brand Name */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="/images/clearHorizonsLogo2.png"
              alt="Logo"
              className="h-20 w-auto mb-2"
            />
            <span className="text-xl font-bold">Unseen Perspectives</span>
          </div>

          {/* Contact Us */}
          <div className="text-center mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:tauqeernizami1@gmail.com" className="text-blue-500 hover:underline">
                tauqeernizami1@gmail.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+919810231586" className="text-blue-500 hover:underline">
                +91 981-0231-586
              </a>
            </p>
            <div className="mt-4">
              <a
                href="#"
                onClick={handleTermsModalOpen}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Terms and Conditions
              </a>{" "}
              |{" "}
              <a
                href="#"
                onClick={handlePrivacyModalOpen}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/syed-mohammed-tauqir-nizami-b3aa85148"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://youtube.com/channel/UCS8KUr36S2v3d4H9U69A2Mw?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/muhammed._.tauqeer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal show={isTermsModalOpen} onClose={handleTermsModalClose} />
      <PrivacyModal show={isPrivacyModalOpen} onClose={handlePrivacyModalClose} />
    </div>
  );
};

export default Page;