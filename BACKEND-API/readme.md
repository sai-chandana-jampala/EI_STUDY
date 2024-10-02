# Troubleshooting Backend-Frontend Connection

## Common Issues and Solutions

1. CORS Errors
   - **Symptom**: Console shows "Access to fetch at 'http://localhost:3000' from origin 'http://localhost:3001' has been blocked by CORS policy"
   - **Solution**: Verify CORS configuration in backend app.js matches frontend origin

2. Network Errors
   - **Symptom**: Failed to fetch errors in console
   - **Solution**: Ensure backend server is running and accessible

3. Data Not Showing Up
   - **Symptom**: API calls succeed but no data appears
   - **Solution**: Check data transformation on both ends, verify API response format

4. Environment Variables Not Working
   - **Symptom**: undefined API URL or other config values
   - **Solution**: Ensure .env files are in correct locations and properly formatted

## Quick Fixes

1. Restart both servers
2. Clear browser cache
3. Check network tab in browser dev tools
4. Verify all environment variables
5. Test API endpoints with Postman or curl

## Best Practices

1. Use loading states for better UX
2. Implement proper error handling on both ends
3. Add logging for debugging
4. Keep API service layer separate from components