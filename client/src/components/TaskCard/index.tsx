import { Task } from '@/state/api'
import { format } from 'date-fns'
import React from 'react'
import Image from 'next/image'

type Props = {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          <div className="flex flex-wrap">
            {task.attachments && task.attachments.length > 0 && (
              <Image
                src={`/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md"
              />
            )}
          </div>
        </div>
      )}
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-md">
        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">ID:</strong>
          <span className="text-gray-900">{task.id}</span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Title:</strong>
          <span className="text-gray-900">{task.title}</span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Description:</strong>
          <span className="text-gray-900">
            {task.description || "No description provided"}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Status:</strong>
          <span className="text-gray-900">{task.status}</span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Priority:</strong>
          <span className="text-gray-900">{task.priority}</span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Tags:</strong>
          <span className="text-gray-900">{task.tags || "No tags"}</span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Start Date:</strong>
          <span className="text-gray-900">
            {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Due Date:</strong>
          <span className="text-gray-900">
            {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Author:</strong>
          <span className="text-gray-900">
            {task.author ? task.author.username : "Unknown"}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <strong className="text-gray-700">Assignee:</strong>
          <span className="text-gray-900">
            {task.assignee ? task.assignee.username : "Unassigned"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard