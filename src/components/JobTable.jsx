"use client";

import React from 'react';
import { Table, Chip, Button } from "@heroui/react";
// Assuming gravity-ui icon package names or your project equivalents
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons"; 

const JobTable = ({ jobs = [] }) => {
  return (
    <div className="w-full p-4">
      <Table>
        <Table.ResizableContainer>
          <Table.Content aria-label="Company jobs management table" className="min-w-[800px]">
            <Table.Header>
              <Table.Column isRowHeader defaultWidth="2fr" id="jobTitle" minWidth={200}>
                Job Title
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="type" minWidth={140}>
                Type & Location
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1.2fr" id="salary" minWidth={160}>
                Salary Range
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="status" minWidth={120}>
                Status
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="actions" minWidth={150}>
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body emptyContent={"No jobs posted yet."}>
              {jobs.map((job) => {
                // Safely extract string ID depending on DB normalization
                const jobId = job._id?.$oid || job._id;

                return (
                  <Table.Row key={jobId}>
                    {/* Job Title */}
                    <Table.Cell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{job.jobTitle}</span>
                        <span className="text-xs text-gray-500 capitalize">{job.jobCategory}</span>
                      </div>
                    </Table.Cell>

                    {/* Type & Location */}
                    <Table.Cell>
                      <div className="flex flex-col gap-1">
                        <span className="capitalize text-sm font-medium">{job.jobType}</span>
                        <span className="text-xs text-gray-400">
                          {job.isRemote ? "Remote" : job.location}
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Salary */}
                    <Table.Cell>
                      <span className="text-sm font-mono">
                        {parseInt(job.minSalary).toLocaleString()} - {parseInt(job.maxSalary).toLocaleString()} {job.currency}
                      </span>
                    </Table.Cell>

                    {/* Status */}
                    <Table.Cell>
                      <Chip
                        color={job.status === "active" ? "success" : "default"}
                        size="sm"
                        variant="soft"
                        className="capitalize"
                      >
                        {job.status}
                      </Chip>
                    </Table.Cell>

                    {/* Actions */}
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        {/* Details/Video Button */}
                        <Button 
                          isIconOnly 
                          size="sm" 
                          variant="light" 
                          aria-label="View Details"
                          onClick={() => console.log("View details for:", jobId)}
                        >
                          <Eye width={16} height={16} />
                        </Button>
                        
                        {/* Edit Button */}
                        <Button 
                          isIconOnly 
                          size="sm" 
                          variant="light" 
                          color="primary"
                          aria-label="Edit Job"
                          onClick={() => console.log("Edit job:", jobId)}
                        >
                          <Pencil width={16} height={16} />
                        </Button>

                        {/* Delete Button */}
                        <Button 
                          isIconOnly 
                          size="sm" 
                          variant="light" 
                          color="danger"
                          aria-label="Delete Job"
                          onClick={() => console.log("Delete job:", jobId)}
                        >
                          <TrashBin width={16} height={16} />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default JobTable;