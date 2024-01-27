"use client";
import { usePathname, useSearchParams } from "next/navigation";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { categories } from "@/app/constants/categories";

const Categories = () => {
  const parms = useSearchParams();
  const category = parms?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
            pt-4
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
      >
        {categories.map((item: any) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
