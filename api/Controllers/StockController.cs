using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stocks;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/stock")]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public StockController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _context.Stocks.ToListAsync();
                
            var stockDto = stocks.Select(s => s.ToStockDto());

            return Ok(stockDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id) 
        {
            var stock = await _context.Stocks.FindAsync(id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto)
        {
            var stockModel = stockDto.ToStockFromCreateDTO();
            await _context.Stocks.AddAsync(stockModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());     
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateStock)
        {
            var stockModel = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);   
            if (stockModel == null)
            {
                return NotFound();
            }

            stockModel.Symbol = updateStock.Symbol;
            stockModel.CompanyName = updateStock.CompanyName;
            stockModel.Purchase = updateStock.Purchase;
            stockModel.LastDiv = updateStock.LastDiv;
            stockModel.Industry = updateStock.Industry;
            stockModel.MarketCap = updateStock.MarketCap;

            await _context.SaveChangesAsync();

            return Ok(stockModel.ToStockDto());
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete ([FromRoute] int id)
        {
            var stockModel = _context.Stocks.FirstOrDefault(x => x.Id == id);
            if (stockModel == null)
            {
                return NotFound();
            }
            _context.Stocks.Remove(stockModel);
            await _context.SaveChangesAsync();
            return NoContent();
        }    
    }
}