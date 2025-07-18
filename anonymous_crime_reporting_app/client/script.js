
document.getElementById('reportForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('status').textContent = 'Report submitted successfully (demo only).';
});
