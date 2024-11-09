import os
import struct

def check_page_in_memory(pid, address):
    # Open pagemap for the given PID
    pagemap_file = f'/proc/{pid}/pagemap'
    page_size = os.sysconf('SC_PAGE_SIZE')
    
    # Calculate the offset in pagemap based on the page number
    page_number = address // page_size
    offset = page_number * 8  # Each entry in pagemap is 8 bytes
    
    with open(pagemap_file, 'rb') as f:
        # Seek to the appropriate entry for the page
        f.seek(offset)
        entry = f.read(8)
        
        # Unpack the 64-bit entry
        value = struct.unpack('Q', entry)[0]
        
        # Check if the page is present
        present = value & (1 << 63)
        return bool(present)

# Example usage
pid = 12345
address = 0x7fff12345678  # Example address from /proc/[pid]/maps

if check_page_in_memory(pid, address):
    print(f"Page at address {hex(address)} is in memory.")
else:
    print(f"Page at address {hex(address)} is NOT in memory.")