import { ACTION_EMPLOYEE_INVITE_SET } from "../constants";

const employeeImage =
  "https://drive.google.com/uc?id=10KxXNBYgwiTGCmYdl-h3rUpn_7isA0rT";
const initialState = {
  data: [
    {
      id: 0,
      firstName: "กล้าณรงค์",
      lastName: "ทมโคตร",
      gender: "ชาย",
      age: 20,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "สตาฟ",
    },
    {
      id: 1,
      firstName: "ขจร",
      lastName: "บุญเจริญ",
      gender: "ชาย",
      age: 21,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "พนักงานต้อนรับ",
    },
    {
      id: 2,
      firstName: "รวิสรา",
      lastName: "หนูเพ็ง",
      gender: "หญิง",
      age: 22,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "พนักงานต้อนรับ",
    },
    {
      id: 3,
      firstName: "วัชรินทร์",
      lastName: "กัณหา",
      gender: "ชาย",
      age: 23,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "บริกร",
    },
    {
      id: 4,
      firstName: "สิรินยา",
      lastName: "กำยาน",
      gender: "หญิง",
      age: 24,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "ช่างภาพ",
    },
    {
      id: 5,
      firstName: "นราวิชญ์",
      lastName: "ไตรพรม",
      gender: "ชาย",
      age: 25,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "บริกร",
    },
    {
      id: 6,
      firstName: "สมหญิง",
      lastName: "7",
      gender: "หญิง",
      age: 26,
      introduceText: "...\n...\n...\n...",
      experience: [
        { work: "รับสมัคร staff งานเลี้ยงบริษัทแมวเหมียว ", position: "สตาฟ" },
        { work: "work11234", position: "รักษาความปลอดภัย" },
        { work: "work11234", position: "พนักงานต้อนรับ" },
        { work: "work11234", position: "บริกร" },
        { work: "work11234", position: "ช่างภาพ" },
      ],
      image: employeeImage,
      position: "รักษาความปลอดภัย",
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_EMPLOYEE_INVITE_SET:
      return { ...state, data: payload };
    default:
      return state;
  }
};
