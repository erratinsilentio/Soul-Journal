"use client";
import { EditProfilePage } from "@/components/settings/edit/EditProfile";
import { ProtectedWrapper } from "@/utils/ProtectedWrapper";

export default function EditProfile() {
  return (
    <ProtectedWrapper>
      <main className="z-0 min-h-screen min-w-full p-4 sm:p-10">
        <EditProfilePage />
      </main>
    </ProtectedWrapper>
  );
}
