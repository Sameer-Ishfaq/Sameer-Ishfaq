"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function Dashboard() {
const [user, setUser] = useState<any>(null);
const router = useRouter();
useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
setUser(user);
} else {
router.push("/login");
}
});
return () => unsubscribe();
}, [router]);
const handleLogout = async () => {
await signOut(auth);
router.push("/");
};
return (

<div className="flex flex-col items-center justify-center min-h-
screen bg-gray-100">
<div className="bg-white p-6 rounded-lg shadow-md w-96 text-
center">
<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
{user && <p className="text-gray-700 mb-4">Welcome,
{user.email}!</p>}
<button onClick={handleLogout} className="bg-red-500 text-
white py-2 px-4 rounded-md hover:bg-red-600 transition">
Logout</button>
</div>
</div>
);
}