import api from './apiClient';

export function submitInquiryService(data) {
  return api.post('/contact', data);
}
