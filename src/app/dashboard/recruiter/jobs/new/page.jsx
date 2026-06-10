"use client";

import React, { useState } from 'react';
import {
  Form,
  Fieldset,
  TextField,
  TextArea,
  Select,
  Button,
  Label,
  FieldError,
  Description,
  ListBox,
} from '@heroui/react';
import { 
  Briefcase, 
  Calendar, 
  DollarSign, 
  House 
} from '@gravity-ui/icons';

export default function PostJobPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [company] = useState({
    name: "TechCorp Inc.",
    id: "comp_123",
    // Assume recruiter has an approved company
  });

  const jobTypes = [
    { id: 'full-time', label: 'Full-time' },
    { id: 'part-time', label: 'Part-time' },
    { id: 'contract', label: 'Contract' },
    { id: 'internship', label: 'Internship' },
  ];

  const currencies = [
    { id: 'USD', label: 'USD' },
    { id: 'EUR', label: 'EUR' },
    { id: 'GBP', label: 'GBP' },
    { id: 'INR', label: 'INR' },
  ];

  // Mock categories - replace with real data
  const categories = [
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' },
    { id: 'product', label: 'Product' },
    { id: 'hr', label: 'Human Resources' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const jobData = Object.fromEntries(formData.entries());

    // Add additional data
    const fullJobData = {
      ...jobData,
      companyId: company.id,
      status: 'active',
      postedAt: new Date().toISOString(),
      // responsibilities, requirements, benefits come from form
    };

    // console.log('Posting job:', fullJobData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Job posted successfully! It is now publicly visible.');
    setIsSubmitting(false);
    
    // In real app: router.push('/dashboard/recruiter/jobs');
  };

  return (
    <div className="bg-zinc-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-500" />
              Post a New Job
            </h1>
            <p className="text-zinc-400 mt-1">Create a compelling job listing to attract top talent</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <House className="w-4 h-4" />
            <span>Posting for: <span className="text-white font-medium">{company.name}</span></span>
          </div>
        </div>

        <Form 
          onSubmit={handleSubmit}
          className="space-y-8"
          validationBehavior="aria"
        >
          {/* Job Info Section */}
          <Fieldset className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
            <Fieldset.Legend className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className='text-center pt-5'>Job Information</span>
            </Fieldset.Legend>

            <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Title */}
              <TextField 
                name="title" 
                isRequired 
                className="md:col-span-2"
              >
                <Label className="text-sm font-medium text-zinc-300">Job Title</Label>
                <input 
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                  placeholder="e.g. Senior Software Engineer" 
                />
                <FieldError />
              </TextField>

              {/* Category */}
              <div>
                <Label className="text-sm font-medium text-zinc-300">Job Category</Label>
                <Select 
                  name="category" 
                  placeholder="Select category" 
                  className="w-full mt-1.5"
                  isRequired
                >
                  <Select.Trigger className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-left">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {categories.map(cat => (
                        <ListBox.Item key={cat.id} id={cat.id} textValue={cat.label}>
                          {cat.label}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Job Type */}
              <div>
                <Label className="text-sm font-medium text-zinc-300">Job Type</Label>
                <Select 
                  name="type" 
                  placeholder="Select job type" 
                  className="w-full mt-1.5"
                  isRequired
                >
                  <Select.Trigger className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-left">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {jobTypes.map(type => (
                        <ListBox.Item key={type.id} id={type.id} textValue={type.label}>
                          {type.label}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Salary Range */}
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-zinc-300 mb-1.5 block">Salary Range</Label>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-end">
                  <TextField name="salaryMin" className="sm:col-span-2">
                    <Label className="text-xs text-zinc-400">Minimum</Label>
                    <input 
                      type="number" 
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white" 
                      placeholder="60000" 
                    />
                  </TextField>
                  
                  <div className="hidden sm:flex items-center justify-center text-zinc-500 pb-3">-</div>
                  
                  <TextField name="salaryMax" className="sm:col-span-2">
                    <Label className="text-xs text-zinc-400">Maximum</Label>
                    <input 
                      type="number" 
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white" 
                      placeholder="90000" 
                    />
                  </TextField>

                  <div>
                    <Label className="text-xs text-zinc-400">Currency</Label>
                    <Select name="currency" defaultValue="USD" className="w-full">
                      <Select.Trigger className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {currencies.map(curr => (
                            <ListBox.Item key={curr.id} id={curr.id}>
                              {curr.label}
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>
                <Description className="text-xs text-zinc-500 mt-1">Annual salary in selected currency</Description>
              </div>

              {/* Location & Remote */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                <TextField name="city" className="md:col-span-1">
                  <Label className="text-sm font-medium text-zinc-300">City</Label>
                  <input 
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white" 
                    placeholder="New York" 
                  />
                </TextField>

                <TextField name="country" className="md:col-span-1">
                  <Label className="text-sm font-medium text-zinc-300">Country</Label>
                  <input 
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white" 
                    placeholder="United States" 
                  />
                </TextField>

                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="remote" 
                      className="w-5 h-5 accent-blue-600 rounded border-zinc-700 bg-zinc-950" 
                    />
                    <span className="text-sm font-medium text-zinc-300">Remote / Work from anywhere</span>
                  </label>
                </div>
              </div>

              {/* Application Deadline */}
              <TextField name="deadline" className="md:col-span-1">
                <Label className="text-sm font-medium text-zinc-300 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Application Deadline
                </Label>
                <input 
                  type="date" 
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white" 
                />
                <FieldError />
              </TextField>
            </Fieldset.Group>
          </Fieldset>

          {/* Job Description Section */}
          <Fieldset className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
            <Fieldset.Legend className="text-xl font-semibold mb-6">Job Description</Fieldset.Legend>
            
            <Fieldset.Group className="space-y-8">
              {/* Responsibilities */}
              <TextField name="responsibilities" isRequired>
                <Label className="text-sm font-medium text-zinc-300">Responsibilities</Label>
                <TextArea 
                  rows={6}
                  placeholder="List the key responsibilities for this role..."
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-white resize-y min-h-[140px]"
                />
                <Description className="text-xs text-zinc-500">What will the candidate be doing day-to-day?</Description>
                <FieldError />
              </TextField>

              {/* Requirements */}
              <TextField name="requirements" isRequired>
                <Label className="text-sm font-medium text-zinc-300">Requirements</Label>
                <TextArea 
                  rows={5}
                  placeholder="Required skills, experience, education..."
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-white resize-y min-h-[120px]"
                />
                <Description className="text-xs text-zinc-500">Must-have qualifications</Description>
                <FieldError />
              </TextField>

              {/* Benefits (Optional) */}
              <TextField name="benefits">
                <Label className="text-sm font-medium text-zinc-300">Benefits &amp; Perks <span className="text-zinc-500 text-xs">(Optional)</span></Label>
                <TextArea 
                  rows={4}
                  placeholder="Health insurance, flexible hours, remote stipend, etc."
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-white resize-y"
                />
                <Description className="text-xs text-zinc-500">What makes your company attractive?</Description>
              </TextField>
            </Fieldset.Group>
          </Fieldset>

          {/* Submit Section */}
          <div className="flex justify-end gap-4 pt-4">
            <Button 
              type="reset" 
              variant="secondary"
              className="px-8 py-3 rounded-2xl border border-zinc-700 hover:bg-zinc-900"
            >
              Clear Form
            </Button>
            
            <Button 
              type="submit" 
              isDisabled={isSubmitting}
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-medium flex items-center gap-2"
            >
              {isSubmitting ? 'Posting...' : 'Post Job'}
              <Briefcase className="w-4 h-4" />
            </Button>
          </div>
        </Form>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Your job will be reviewed and go live immediately upon approval. 
          Only recruiters with verified companies can post jobs.
        </p>
      </div>
    </div>
  );
}