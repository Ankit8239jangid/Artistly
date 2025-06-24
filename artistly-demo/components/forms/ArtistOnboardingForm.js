"use client";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContextData } from "@/context/FormContext";
import { Upload, MapPin, Globe, Currency, User, FileText, Tag } from 'lucide-react';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed().nullable(),
});

const categoriesList = ["Singer", "Comedian", "Magician", "Dancer", "DJ", "Speaker"];
const languagesList = ["Hindi", "English", "Punjabi", "Marathi", "Bengali"];
const feeOptions = ["₹0–₹50,000", "₹50,000–₹1,00,000", "₹1,00,000–₹5,00,000", "₹5,00,000+"];

export default function ArtistOnboardingForm() {
  const {
    formData,
    updateFormData
  } = useFormContextData();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted! Check console.");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    updateFormData("profileImage", file);
    setValue("profileImage", file);
    if (file) {
      updateFormData("imagePreview", URL.createObjectURL(file));
    }
  };

  const renderCheckbox = (checked) => (
    <div className="h-5 w-5 border border-gray-300 rounded bg-white flex items-center justify-center">
      {checked && <div className="w-3 h-3 bg-purple-600 rounded" />}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden"
        aria-label="Artist onboarding form"
      >
        <div className="bg-purple-600 px-8 py-6 text-white">
          <h2 className="text-3xl font-bold">Artist Onboarding</h2>
          <p className="mt-2 text-purple-100">Fill in your details to join our platform</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="name" className="flex items-center gap-2 text-base">
                <User className="w-4 h-4" />
                Name
              </Label>
              <Input id="name" placeholder="Enter full name" {...register("name")} />
              <p role="alert" className="text-sm text-red-500">{errors.name?.message}</p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="location" className="flex items-center gap-2 text-base">
                <MapPin className="w-4 h-4" />
                Location
              </Label>
              <Input id="location" placeholder="City, State" {...register("location")} />
              <p role="alert" className="text-sm text-red-500">{errors.location?.message}</p>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="bio" className="flex items-center gap-2 text-base">
              <FileText className="w-4 h-4" />
              Bio
            </Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." {...register("bio")} />
            <p role="alert" className="text-sm text-red-500">{errors.bio?.message}</p>
          </div>

          {/* Category */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base">
              <Tag className="w-4 h-4" />
              Category
            </Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categoriesList.map((cat) => {
                    const isChecked = field.value.includes(cat);
                    const toggle = () => {
                      const newValue = isChecked
                        ? field.value.filter((val) => val !== cat)
                        : [...field.value, cat];
                      field.onChange(newValue);
                    };
                    return (
                      <div
                        key={cat}
                        role="checkbox"
                        aria-checked={isChecked}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            toggle();
                          }
                        }}
                        onClick={toggle}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer
                          ${isChecked ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-200'}`}
                      >
                        {renderCheckbox(isChecked)}
                        <span>{cat}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            />
            <p role="alert" className="text-sm text-red-500">{errors.category?.message}</p>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base">
              <Globe className="w-4 h-4" />
              Languages Spoken
            </Label>
            <Controller
              name="languages"
              control={control}
              render={({ field }) => (
                <div className="flex flex-wrap gap-3">
                  {languagesList.map((lang) => {
                    const isChecked = field.value.includes(lang);
                    const toggle = () => {
                      const newValue = isChecked
                        ? field.value.filter((val) => val !== lang)
                        : [...field.value, lang];
                      field.onChange(newValue);
                    };
                    return (
                      <div
                        key={lang}
                        role="checkbox"
                        aria-checked={isChecked}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            toggle();
                          }
                        }}
                        onClick={toggle}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all cursor-pointer
                          ${isChecked ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-200'}`}
                      >
                        {renderCheckbox(isChecked)}
                        <span>{lang}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            />
            <p role="alert" className="text-sm text-red-500">{errors.languages?.message}</p>
          </div>

          {/* Fee */}
          <div className="space-y-3">
            <Label htmlFor="feeRange" className="flex items-center gap-2 text-base">
              <Currency className="w-4 h-4" />
              Fee Range
            </Label>
            <select
              id="feeRange"
              {...register("feeRange")}
              className="w-full h-12 border-2 rounded-lg px-4 text-base focus:border-purple-500 outline-none"
            >
              <option value="">Select fee range</option>
              {feeOptions.map((fee) => (
                <option key={fee} value={fee}>{fee}</option>
              ))}
            </select>
            <p role="alert" className="text-sm text-red-500">{errors.feeRange?.message}</p>
          </div>

          {/* Profile Image */}
          <div className="space-y-4">
            <Label htmlFor="profileImage" className="flex items-center gap-2 text-base">
              <Upload className="w-4 h-4" />
              Profile Image
            </Label>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <Input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="h-12"
                />
              </div>
              {formData.imagePreview && (
                <img
                  src={formData.imagePreview}
                  alt="Profile preview"
                  className="h-24 w-24 rounded-lg object-cover border-2 border-purple-200"
                />
              )}
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-gray-50 border-t">
          <Button
            type="submit"
            aria-label="Submit artist profile"
            className="w-full h-12 text-lg bg-purple-600 hover:bg-purple-700"
          >
            Submit Artist Profile
          </Button>
        </div>
      </form>
    </div>
  );
}
