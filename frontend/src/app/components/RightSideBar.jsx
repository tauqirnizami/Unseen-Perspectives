"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const RightSideBar = () => {
  const clearHorizonsInfo = {
    name: "Unseen Perspectives",
    motive: "Unseen Perspectives is more than an initiative—it's a movement to bridge the gap between the visually impaired and meaningful employment. We believe that every person, regardless of their abilities, deserves the chance to shine in their chosen field. By creating direct channels of communication between employers and blind individuals, we aim to foster inclusivity, equality, and independence.",
    future: "Looking ahead, Unseen Perspectives envisions a comprehensive Skill-Up Program—a groundbreaking initiative designed to elevate the employability of blind individuals. Through specialized training sessions in cutting-edge technology, soft skills, and industry-focused certifications, we aim to transform our candidates into pioneers in their fields. Furthermore, we're building a vibrant community network where collaboration, mentorship, and growth opportunities flourish, ensuring that the impact of our mission grows exponentially.",
    image: "/images/clearHorizonsLogo2.png",
    // website: "https://www.clearhorizons.org",
  };

  return (
    <motion.aside 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex text-lg font-semibold items-center">
            {/* <Info className="mr-2 h-5 w-5 text-primary" /> */}
            About Unseen Perspectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4 p-4">
            <img
              src={clearHorizonsInfo.image}
              alt={clearHorizonsInfo.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Our Motive</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{clearHorizonsInfo.motive}</p>
              <h3 className="text-lg font-semibold mt-4">Future Propositions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{clearHorizonsInfo.future}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.aside>
  );
};

export default RightSideBar;
