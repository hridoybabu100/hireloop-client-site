import React from 'react';
import { getCompanyJobs } from '@/lib/api/jobs';
import JobTable from '@/components/JobTable'; // adjust directory path accordingly

const RecruiterJobs = async () => {
    const companyId = 'company_123'; 
    const jobs = await getCompanyJobs(companyId); 
    
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <header className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Manage Posted Jobs</h1>
                <p className="text-sm text-gray-500">View, edit, or update your company's live opportunities.</p>
            </header>
            
            {/* Render Client side Hero UI Table component */}
            <JobTable jobs={jobs} />
        </div>
    );
};

export default RecruiterJobs;