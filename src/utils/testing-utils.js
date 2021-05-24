import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserProvider from 'contexts/UserContext';
import { renderHook } from '@testing-library/react-hooks';

const queryClient = new QueryClient();

// export const customRender = (ui, { providerProps, ...renderOptions }) => {
//   return render(
//     <QueryClientProvider client={queryClient}>
//       <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>
//     </QueryClientProvider>,
//     renderOptions
//   );
// };

const AllProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
};

export const customRender = (ui, options) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

export const customRenderHook = (hook) => {
  return renderHook(() => hook(), { wrapper: AllProviders });
};
