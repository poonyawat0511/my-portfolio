export function getStudyStatus(admissionYear: number, startMonth = 8) {
  const now = new Date();
  
  let academicYear = now.getFullYear();
  
  const month = now.getMonth() + 1;
  
  if (month < startMonth) academicYear -= 1;
  
  const year = academicYear - admissionYear + 1; 
  if (year > 4) return { status: "graduate" as const };
  if (year < 1)  return { status: "not-started" as const }; 
  return { status: "student" as const, year };
}
