/* Reference data — countries, states, ID types, business types, etc. */
import type { CountryOption, SelectOption, UserType } from "@/lib/auth/signup.types";

export const countries: CountryOption[] = [
  { value: "india", label: "India", code: "IN" },
  { value: "united-states", label: "United States", code: "US" },
  { value: "united-kingdom", label: "United Kingdom", code: "GB" },
  { value: "canada", label: "Canada", code: "CA" },
  { value: "australia", label: "Australia", code: "AU" },
  { value: "germany", label: "Germany", code: "DE" },
  { value: "france", label: "France", code: "FR" },
  { value: "japan", label: "Japan", code: "JP" },
  { value: "singapore", label: "Singapore", code: "SG" },
  { value: "uae", label: "United Arab Emirates", code: "AE" },
  { value: "saudi-arabia", label: "Saudi Arabia", code: "SA" },
  { value: "south-korea", label: "South Korea", code: "KR" },
  { value: "brazil", label: "Brazil", code: "BR" },
  { value: "mexico", label: "Mexico", code: "MX" },
  { value: "indonesia", label: "Indonesia", code: "ID" },
  { value: "thailand", label: "Thailand", code: "TH" },
  { value: "vietnam", label: "Vietnam", code: "VN" },
  { value: "malaysia", label: "Malaysia", code: "MY" },
  { value: "philippines", label: "Philippines", code: "PH" },
  { value: "south-africa", label: "South Africa", code: "ZA" },
  { value: "nigeria", label: "Nigeria", code: "NG" },
  { value: "kenya", label: "Kenya", code: "KE" },
  { value: "egypt", label: "Egypt", code: "EG" },
  { value: "netherlands", label: "Netherlands", code: "NL" },
  { value: "switzerland", label: "Switzerland", code: "CH" },
  { value: "sweden", label: "Sweden", code: "SE" },
  { value: "norway", label: "Norway", code: "NO" },
  { value: "denmark", label: "Denmark", code: "DK" },
  { value: "finland", label: "Finland", code: "FI" },
  { value: "ireland", label: "Ireland", code: "IE" },
  { value: "israel", label: "Israel", code: "IL" },
  { value: "new-zealand", label: "New Zealand", code: "NZ" },
  { value: "italy", label: "Italy", code: "IT" },
  { value: "spain", label: "Spain", code: "ES" },
  { value: "portugal", label: "Portugal", code: "PT" },
  { value: "poland", label: "Poland", code: "PL" },
  { value: "turkey", label: "Turkey", code: "TR" },
  { value: "argentina", label: "Argentina", code: "AR" },
  { value: "colombia", label: "Colombia", code: "CO" },
  { value: "chile", label: "Chile", code: "CL" },
  { value: "bangladesh", label: "Bangladesh", code: "BD" },
  { value: "pakistan", label: "Pakistan", code: "PK" },
  { value: "sri-lanka", label: "Sri Lanka", code: "LK" },
  { value: "nepal", label: "Nepal", code: "NP" },
];

export const indianStates: SelectOption[] = [
  { value: "andhra-pradesh", label: "Andhra Pradesh" },
  { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal-pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya-pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil-nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar-pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west-bengal", label: "West Bengal" },
  { value: "andaman-nicobar", label: "Andaman & Nicobar Islands" },
  { value: "chandigarh", label: "Chandigarh" },
  { value: "dadra-nagar-haveli", label: "Dadra & Nagar Haveli and Daman & Diu" },
  { value: "delhi", label: "Delhi" },
  { value: "jammu-kashmir", label: "Jammu & Kashmir" },
  { value: "ladakh", label: "Ladakh" },
  { value: "lakshadweep", label: "Lakshadweep" },
  { value: "puducherry", label: "Puducherry" },
];

export const indianIndividualIdTypes: SelectOption[] = [
  { value: "aadhaar", label: "Aadhaar Card" },
  { value: "pan", label: "PAN Card" },
  { value: "passport", label: "Passport" },
];

export const internationalIndividualIdTypes: SelectOption[] = [
  { value: "tax-number", label: "Tax Identification Number" },
  { value: "passport", label: "Passport" },
];

export const indianBusinessIdTypes: SelectOption[] = [
  { value: "gst", label: "GST Number" },
];

export const internationalBusinessIdTypes: SelectOption[] = [
  { value: "business-registration", label: "Business Registration Number" },
  { value: "tax-id", label: "Tax Identification Number" },
];

export function getIdTypesForContext(
  country: string,
  userType: UserType
): SelectOption[] {
  const isIndia = country === "india";
  if (userType === "individual") {
    return isIndia ? indianIndividualIdTypes : internationalIndividualIdTypes;
  }
  return isIndia ? indianBusinessIdTypes : internationalBusinessIdTypes;
}

export const businessTypes: SelectOption[] = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance & Banking" },
  { value: "education", label: "Education" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "consulting", label: "Consulting" },
  { value: "media", label: "Media & Entertainment" },
  { value: "logistics", label: "Logistics & Supply Chain" },
  { value: "real-estate", label: "Real Estate" },
  { value: "other", label: "Other" },
];

export const employeeRanges: SelectOption[] = [
  { value: "1-10", label: "1 – 10 employees" },
  { value: "11-50", label: "11 – 50 employees" },
  { value: "51-200", label: "51 – 200 employees" },
  { value: "201-500", label: "201 – 500 employees" },
  { value: "501-1000", label: "501 – 1 000 employees" },
  { value: "1000+", label: "1 000+ employees" },
];

export const ACCEPTED_FILE_TYPES = ".jpg,.jpeg,.png,.pdf";
export const MAX_FILE_SIZE_MB = 5;