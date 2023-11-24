import { useQuery, useMutation, useQueryClient } from 'react-query';

export function UseRequestProcessor() {
  const queryClient = useQueryClient();

  function Query(key: any, queryFunction: any, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function Mutate(key: any, mutationFunction: any, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  }

  return { Query, Mutate };
}