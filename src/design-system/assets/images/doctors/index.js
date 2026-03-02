const modules = import.meta.glob("./*.png", {
  eager: true,
  import: "default",
});

const toDisplayName = (filename) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");

const toInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

const fileEntries = Object.entries(modules)
  .map(([filePath, image]) => {
    const filename = filePath.split("/").pop() || "";
    const name = toDisplayName(filename);
    return [name, image];
  })
  .sort(([a], [b]) => a.localeCompare(b));

export const doctors = Object.fromEntries(
  fileEntries.map(([name, image]) => [name, { image, initials: toInitials(name) }]),
);

export const doctorList = fileEntries.map(([name]) => ({
  name,
  ...doctors[name],
}));

export const doctorImages = doctorList.map((doctor) => doctor.image);

export const getDoctor = (name) => doctors[name] || null;
export const getDoctorImageByName = (name) => doctors[name]?.image || null;
export const getDoctorNames = () => doctorList.map((doctor) => doctor.name);

export const getRandomDoctor = () =>
  doctorList[Math.floor(Math.random() * doctorList.length)] || null;

export const getRandomDoctorImage = () =>
  doctorImages[Math.floor(Math.random() * doctorImages.length)] || null;

export const getDoctorImage = (index) => {
  if (doctorImages.length === 0) return null;
  return doctorImages[((index % doctorImages.length) + doctorImages.length) % doctorImages.length];
};

export default doctors;
