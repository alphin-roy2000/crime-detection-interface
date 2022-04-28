import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api'}),
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => '/employees',
            providesTags: ['Employee']
        }),
        getDepartmentList: builder.query({
            query: () => '/departments',
            providesTags: ['Department']
        }),
        getDepartmentDetails: builder.query({
            query: () => '/departments/details',
            providesTags: ['Department']
        }),
        getEmployeeDetails: builder.query({
            query: (id) => `/employees/${id}`,
            providesTags: ['Employee']
        }),
        addEmployee: builder.mutation({
            query: (body) => ({
              url: '/employees',
              method: 'POST',
              body,
            }),
            invalidatesTags: ['Employee'],
        }),
        updateEmployee: builder.mutation({
            query: ({ id, ...patch }) => ({
              url: `/employees/${id}`,
              method: 'PUT',
              body: patch,
            }),
            invalidatesTags: ['Employee'],
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
              url: `/employees/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['Employee'],
        })
    })
})
export const {
    useGetEmployeeListQuery,
    useGetDepartmentListQuery,
    useGetDepartmentDetailsQuery,
    useGetEmployeeDetailsQuery,
    useAddEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation
  } = employeeApi;
